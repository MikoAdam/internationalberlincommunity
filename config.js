const config = {
  appName: "International Berlin Community",
  appNameShort: "IBC", 
  appDescription: "International Berlin Community (IBC) e.V. - A registered non-profit fostering cross-cultural integration through evidence-based community programs and strategic partnerships.",
  domainName: "internationalberlincommunity.com",
  crisp: { id: "" },
  resend: {
    fromNoReply: `IBC <noreply@internationalberlincommunity.com>`,
    fromAdmin: `Adam at IBC <adam@internationalberlincommunity.com>`,
    supportEmail: "adam@internationalberlincommunity.com",
    forwardRepliesTo: "adammiko98@gmail.com",
  },
  stripe: { plans: [] },
  aws: { bucket: "bucket-name", bucketUrl: `https://bucket-name.s3.amazonaws.com/`, cdn: "https://cdn-id.cloudfront.net/" },
  mailgun: {
    subdomain: "mg",
    fromNoReply: `IBC <noreply@mg.internationalberlincommunity.com>`,
    fromAdmin: `Adam at IBC <adam@mg.internationalberlincommunity.com>`,
    supportEmail: "adam@mg.internationalberlincommunity.com",
    forwardRepliesTo: "adammiko98@gmail.com",
  },
  colors: {
    theme: "dark",
    main: "#2dd4bf",
  },
  auth: {
    loginUrl: "/api/auth/signin",
    callbackUrl: "/dashboard",
  },
};

export default config;