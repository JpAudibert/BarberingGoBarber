interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      name: string;
      email: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',
  defaults: {
    from: {
      email: 'joaopedro@audibert.com.br',
      name: 'Joao Pedro Audibert',
    },
  },
} as IMailConfig;
