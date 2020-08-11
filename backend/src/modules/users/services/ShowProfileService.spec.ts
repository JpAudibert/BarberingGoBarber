import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';

import ShowProfileService from './ShowProfileService';

let fakeUsersRepository: FakeUsersRepository;
let showProfileService: ShowProfileService;

describe('UpdateProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();

    showProfileService = new ShowProfileService(fakeUsersRepository);
  });

  it(`should be able show user`, async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'email@email.com',
      password: '123456',
    });

    const shownUser = await showProfileService.execute({
      user_id: user.id,
    });

    expect(shownUser.name).toBe('John Doe');
    expect(shownUser.email).toBe('email@email.com');
  });

  it(`shouldn't be able show user wioth wrong user_id`, async () => {
    await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'email@email.com',
      password: '123456',
    });

    const wrongId = 'wrongId';

    await expect(
      showProfileService.execute({
        user_id: wrongId,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
