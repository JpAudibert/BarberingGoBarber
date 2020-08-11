import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '@modules/users/providers/HashProvider/fakes/FakeHashProvider';

import UpdateProfileService from './UpdateProfileService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let updateProfileService: UpdateProfileService;

describe('UpdateProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    updateProfileService = new UpdateProfileService(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });

  it(`should be able to update user's name and email`, async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'email@email.com',
      password: '123456',
    });

    const updatedUser = await updateProfileService.execute({
      user_id: user.id,
      name: 'John Does',
      email: 'john.does@email.com',
    });

    expect(updatedUser.name).toBe('John Does');
    expect(updatedUser.email).toBe('john.does@email.com');
  });

  it(`shouldn't be able to update email if the provided email is already used`, async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'email@email.com',
      password: '123456',
    });

    await fakeUsersRepository.create({
      name: 'Tony Stark',
      email: 'ironman@email.com',
      password: '654321',
    });

    await expect(
      updateProfileService.execute({
        user_id: user.id,
        name: 'John Does',
        email: 'ironman@email.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it(`should be able to update the password`, async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'email@email.com',
      password: '123456',
    });

    const updatedUser = await updateProfileService.execute({
      user_id: user.id,
      name: 'John Does',
      email: 'john.does@email.com',
      password: '987654',
      old_password: '123456',
    });

    expect(updatedUser.password).toBe('987654');
  });

  it(`shouldn't be able to update the password without providing old password`, async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'email@email.com',
      password: '123456',
    });

    await expect(
      updateProfileService.execute({
        user_id: user.id,
        name: 'John Does',
        email: 'john.does@email.com',
        password: '987654',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it(`shouldn't be able to update the password providing wrong old password`, async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'email@email.com',
      password: '123456',
    });

    await expect(
      updateProfileService.execute({
        user_id: user.id,
        name: 'John Does',
        email: 'john.does@email.com',
        password: '987654',
        old_password: 'wrong_old_password',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
