"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    (0, class_validator_1.useContainer)(app.select(app_module_1.AppModule), { fallbackOnErrors: true });
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));
    const port = process.env.PORT || 4000;
    await app.listen(port);
    const server = app.getHttpAdapter().getInstance();
    const logger = new common_1.Logger('Bootstrap');
    server._router.stack.forEach((middleware) => {
        if (middleware.route) {
            const route = middleware.route;
            logger.log(`Route: ${route.stack[0].method.toUpperCase()} ${route.path}`);
        }
    });
    console.log(`Server running on http://localhost:${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map