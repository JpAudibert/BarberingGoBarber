import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import FakeStorageProvider from '@shared/container/providers/StorageProvider/fakes/FakeStorageProvider';

import UpdateUserAvatarService from './UpdateUserAvatarService';

let fakeUsersRepository: FakeUsersRepository;
let fakeStorageProvider: FakeStorageProvider;
let updateUserAvatarService: UpdateUserAvatarService;

describe('UpdateUserAvatar', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeStorageProvider = new FakeStorageProvider();

    updateUserAvatarService = new UpdateUserAvatarService(
      fakeUsersRepository,
      fakeStorageProvider,
    );
  });

  it(`should be able to update user's avatar`, async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'email@email.com',
      password: '123456',
    });

    await updateUserAvatarService.execute({
      user_id: user.id,
      avatarFilename: 'avatarFilename.jpg',
    });

    expect(user.avatar).toBe('avatarFilename.jpg');
  });

  it(`shouldn't be able to update user's avatar with a non existants user`, async () => {
    const user_id = '123';

    expect(
      updateUserAvatarService.execute({
        user_id,
        avatarFilename: 'avatarFilename.jpg',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it(`should delete old avatar when updating new one`, async () => {
    const deleteFile = jest.spyOn(fakeStorageProvider, 'deleteFile');

    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'email@email.com',
      password: '123456',
    });

    await updateUserAvatarService.execute({
      user_id: user.id,
      avatarFilename: 'avatarFilename.jpg',
    });

    await updateUserAvatarService.execute({
      user_id: user.id,
      avatarFilename: 'newFile.jpg',
    });

    expect(deleteFile).toHaveBeenCalledWith('avatarFilename.jpg');
    expect(user.avatar).toBe('newFile.jpg');
  });
});
