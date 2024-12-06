import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { UserService } from './user.service';
import { PostService } from './post.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: UserService,
          useValue: {
            createUser: jest.fn(),
          },
        },
        {
          provide: PostService,
          useValue: {
            post: jest.fn(),
            posts: jest.fn(),
            createPost: jest.fn(),
            updatePost: jest.fn(),
            deletePost: jest.fn(),
          },
        },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('getPublishedPosts', () => {
    it('should return an array of published posts', async () => {
      const result = [];
      jest.spyOn(appController, 'getPublishedPosts').mockResolvedValue(result);

      expect(await appController.getPublishedPosts()).toBe(result);
    });
  });

  // describe('root', () => {
  //   it('should return an array of published posts', () => {
  //     expect(appController.getHello()).toBe('Hello World!');
  //   });
  // });
});
