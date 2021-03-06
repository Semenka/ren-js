import * as Sentry from "@sentry/browser";

import { ExtraErrorData } from "@sentry/integrations";

import { SENTRY_DSN, SENTRY_ENVIRONMENT, SOURCE_VERSION } from "./environmentVariables";
import { pageLoadedAt } from "./errors";

export const initializeSentry = () => {

    // Initialize Sentry error logging
    Sentry.init({
        // Used to define the project to log errors to
        dsn: SENTRY_DSN,

        // Used to separate production and staging errors
        environment: SENTRY_ENVIRONMENT,

        // Used to track errors across versions
        release: SOURCE_VERSION,

        // Only throw errors generated from scripts at these URLs
        whitelistUrls: [
            /.*renproject.*/i,

            // Local testing (localhost and IPv4 addresses)
            /.*localhost.*/i,
            /.*(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).*/
        ],

        integrations: [new ExtraErrorData()],
    });

    Sentry.configureScope((scope) => {
        scope.setExtra("loggedIn", false);

        // We set this to false when logging to Sentry explicitly.
        scope.setExtra("caught", false);

        scope.setExtra("release", SOURCE_VERSION);

        scope.setExtra("pageLoadedAt", pageLoadedAt());
    });
};
