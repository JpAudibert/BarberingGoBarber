import AppError from '@shared/errors/AppError';

import FakeMailProvider from '@shared/container/providers/MailProvider/fakes/FakeMailProvider';
import FakeUserTokenRepository from '@modules/users/repositories/fakes/FakeUserTokenRepository';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';

import SendForgotPasswordEmailService from './SendForgotPasswordEmailService';

let fakeMailProvider: FakeMailProvider;
let fakeUserTokenRepository: FakeUserTokenRepository;
let fakeUsersRepository: FakeUsersRepository;
let sendForgotPasswordEmailService: SendForgotPasswordEmailService;

describe('SendForgotPassowordEmail', () => {
  beforeEach(() => {
    fakeMailProvider = new FakeMailProvider();
    fakeUserTokenRepository = new FakeUserTokenRepository();
    fakeUsersRepository = new FakeUsersRepository();

    sendForgotPasswordEmailService = new SendForgotPasswordEmailService(
      fakeUsersRepository,
      fakeMailProvider,
      fakeUserTokenRepository,
    );
  });

  it('should be able to recover the password using email', async () => {
    const mailSended = jest.spyOn(fakeMailProvider, 'sendMail');

    await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'email@email.com',
      password: '123456',
    });

    await sendForgotPasswordEmailService.execute({
      email: 'email@email.com',
    });

    expect(mailSended).toHaveBeenCalled();
  });

  it(`shouldn't be able to recover the password of a non-existing user password`, async () => {
    await expect(
      sendForgotPasswordEmailService.execute({
        email: 'email@email.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should generate a forgotten password token', async () => {
    const generateToken = jest.spyOn(fakeUserTokenRepository, 'generate');

    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'email@email.com',
      password: '123456',
    });

    await sendForgotPasswordEmailService.execute({
      email: 'email@email.com',
    });

    expect(generateToken).toHaveBeenCalledWith(user.id);
  });
});
