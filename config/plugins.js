module.exports = ({env}) => ({
  upload: {
    config: {
      provider: 'strapi-provider-upload-minio-ce',
      providerOptions: {
        accessKey: env('MINIO_ACCESS_KEY'),
        secretKey: env('MINIO_SECRET_KEY'),
        bucket: env('MINIO_BUCKET'),
        endPoint: env('MINIO_ENDPOINT'),
        port: env('MINIO_PORT'),
        useSSL: env('MINIO_USE_SSL'),
        folder: env('MINIO_FOLDER'),
        private: env('MINIO_PRIVATE'), // private bucket
        expiry: env('MINIO_EXPIRY'), // default 7 days, unit: seconds, only work for private bucket
      },
    },
  },
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'guilherme.sampaio@estudante.ifms.edu.br',
        defaultReplyTo: 'guilherme.sampaio@estudante.ifms.edu.br',
      },
    },
  },
})
