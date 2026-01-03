// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"


Sentry.init({
  dsn: "https://ccf23a1c4b38a5c4d564cb61ee6a06a8@o4510618931953664.ingest.us.sentry.io/4510618939817984",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
  integrations: [Sentry.mongooseIntegration()]
});