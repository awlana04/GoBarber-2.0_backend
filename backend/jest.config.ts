/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  // All imported modules in your tests should be mocked automatically
  // automock: false,

  // Stop running tests after `n` failures
  // bail: 0,

  // The directory where Jest should store its cached dependency information
  // cacheDirectory: "/tmp/jest_rs",

  // Automatically clear mock calls, instances and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  // collectCoverage: false,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  // collectCoverageFrom: undefined,

  // The directory where Jest should output its coverage files
  // coverageDirectory: undefined,

  // An array of regexp pattern strings used to skip coverage collection
  // coveragePathIgnorePatterns: [
  //   "/node_modules/"
  // ],

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',

  // A list of reporter names that Jest uses when writing coverage reports
  // coverageReporters: [
  //   "json",
  //   "text",
  //   "lcov",
  //   "clover"
  // ],

  // An object that configures minimum threshold enforcement for coverage results
  // coverageThreshold: undefined,

  // A path to a custom dependency extractor
  // dependencyExtractor: undefined,

  // Make calling deprecated APIs throw helpful error messages
  // errorOnDeprecated: false,

  // Force coverage collection from ignored files using an array of glob patterns
  // forceCoverageMatch: [],

  // A path to a module which exports an async function that is triggered once before all test suites
  // globalSetup: undefined,

  // A path to a module which exports an async function that is triggered once after all test suites
  // globalTeardown: undefined,

  // A set of global variables that need to be available in all test environments
  // globals: {},

  // The maximum amount of workers used to run your tests. Can be specified as % or a number. E.g. maxWorkers: 10% will use 10% of your CPU amount + 1 as the maximum worker number. maxWorkers: 2 will use a maximum of 2 workers.
  // maxWorkers: "50%",

  // An array of directory names to be searched recursively up from the requiring module's location
  // moduleDirectories: [
  //   "node_modules"
  // ],

  // An array of file extensions your modules use
  // moduleFileExtensions: [
  //   "js",
  //   "jsx",
  //   "ts",
  //   "tsx",
  //   "json",
  //   "node"
  // ],

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    '@app/app': ['<rootDir>/src/app/app'],
    '@database/index': ['<rootDir>/src/app/infra/database/index'],
    '@entities/user': ['<rootDir>/src/domain/entities/user'],
    '@entities/barber': ['<rootDir>/src/domain/entities/barber'],
    '@entities/appointment': ['<rootDir>/src/domain/entities/appointment'],
    '@entities/refresh-token': ['<rootDir>/src/domain/entities/refresh-token'],
    '@entities/notification': ['<rootDir>/src/domain/entities/notifications'],
    '@entities/rating': ['<rootDir>/src/domain/entities/rating'],
    '@services/users/authenticate-user-service': [
      '<rootDir>/src/domain/services/users/authenticate-user-service',
    ],
    '@services/users/create-user-service': [
      '<rootDir>/src/domain/services/users/create-user-service',
    ],
    '@services/users/view-user-profile-service': [
      '<rootDir>/src/domain/services/users/view-user-profile-service',
    ],
    '@services/users/update-user-service': [
      '<rootDir>/src/domain/services/users/update-user-service',
    ],
    '@services/users/update-user-avatar-service': [
      '<rootDir>/src/domain/services/users/update-user-avatar-service',
    ],
    '@services/barbers/create-barber-service': [
      '<rootDir>/src/domain/services/barbers/create-barber-service',
    ],
    '@services/barbers/view-barber-profile-service': [
      '<rootDir>/src/domain/services/barbers/view-barber-profile-service',
    ],
    '@services/barbers/get-all-barbers-service': [
      '<rootDir>/src/domain/services/barbers/get-all-barbers-service',
    ],
    '@services/barbers/update-barber-service': [
      '<rootDir>/src/domain/services/barbers/update-barber-service',
    ],
    '@services/barbers/update-barber-user-password-service': [
      '<rootDir>/src/domain/services/barbers/update-barber-user-password-service',
    ],
    '@services/barbers/update-barber-user-avatar-service': [
      '<rootDir>/src/domain/services/barbers/update-barber-user-avatar-service',
    ],
    '@services/barbers/delete-barber-service': [
      '<rootDir>/src/domain/services/barbers/delete-barber-service',
    ],
    '@services/users/delete-user-service': [
      '<rootDir>/src/domain/services/users/delete-user-service',
    ],
    '@services/refresh-tokens/create-refresh-token-service': [
      '<rootDir>/src/domain/services/refresh-tokens/create-refresh-token-service',
    ],
    '@services/appointments/create-appointment-service': [
      '<rootDir>/src/domain/services/appointments/create-appointment-service',
    ],
    '@services/appointments/view-appointment-service': [
      '<rootDir>/src/domain/services/appointments/view-appointment-service',
    ],
    '@services/appointments/get-all-appointments-service': [
      '<rootDir>/src/domain/services/appointments/get-all-appointments-service',
    ],
    '@services/appointments/delete-appointment-service': [
      '<rootDir>/src/domain/services/appointments/delete-appointment-service',
    ],
    '@usecases/implementations/user-usecase': [
      '<rootDir>/src/domain/usecases/implementations/user-usecase',
    ],
    '@usecases/implementations/barber-usecase': [
      '<rootDir>/src/domain/usecases/implementations/barber-usecase',
    ],
    '@usecases/implementations/appointment-usecase': [
      '<rootDir>/src/domain/usecases/implementations/appointment-usecase',
    ],
    '@usecases/implementations/refresh-token-usecase': [
      '<rootDir>/src/domain/usecases/implementations/refresh-token-usecase',
    ],
    '@usecases/implementations/notification-usecase': [
      '<rootDir>/src/domain/usecases/implementations/notification-usecase',
    ],
    '@usecases/implementations/rating-usecase': [
      '<rootDir>/src/domain/usecases/implementations/rating-usecase',
    ],
    '@domain/providers/implementations/refresh-token-provider': [
      '<rootDir>/src/domain/providers/implementations/refresh-token-provider',
    ],
    '@core/config/upload': ['<rootDir>/src/core/config/upload'],
    '@core/factories/user-factory': [
      '<rootDir>/src/core/factories/user-factory',
    ],
    '@core/factories/barber-factory': [
      '<rootDir>/src/core/factories/barber-factory',
    ],
    '@core/factories/refresh-token-factory': [
      '<rootDir>/src/core/factories/refresh-token-factory',
    ],
    '@core/factories/appointment-factory': [
      '<rootDir>/src/core/factories/appointment-factory',
    ],
    '@adapters/implementations/hash-adapter': [
      '<rootDir>/src/core/adapters/implementations/hash-adapter',
    ],
    '@adapters/implementations/disk-storage-adapter': [
      '<rootDir>/src/core/adapters/implementations/disk-storage-adapter',
    ],
    '@adapters/implementations/expires-in-date-adapter': [
      '<rootDir>/src/core/adapters/implementations/expires-in-date-adapter',
    ],
    '@adapters/implementations/token-adapter': [
      '<rootDir>/src/core/adapters/implementations/token-adapter',
    ],
    '@adapters/implementations/booked-in-a-past-date-adapter': [
      '<rootDir>/src/core/adapters/implementations/booked-in-a-past-date-adapter',
    ],
    '@controllers/users/create-user-controller': [
      '<rootDir>/src/core/controllers/users/create-user-controller',
    ],
    '@controllers/users/update-user-controller': [
      '<rootDir>/src/core/controllers/users/update-user-controller',
    ],
    '@controllers/users/update-user-avatar-controller': [
      '<rootDir>/src/core/controllers/users/update-user-avatar-controller',
    ],
    '@controllers/barbers/create-barber-controller': [
      '<rootDir>/src/core/controllers/barbers/create-barber-controller',
    ],
    '@controllers/barbers/view-barber-profile-controller': [
      '<rootDir>/src/core/controllers/barbers/view-barber-profile-controller',
    ],
    '@controllers/barbers/get-all-barbers-controller': [
      '<rootDir>/src/core/controllers/barbers/get-all-barbers-controller',
    ],
    '@controllers/barbers/update-barber-controller': [
      '<rootDir>/src/core/controllers/barbers/update-barber-controller',
    ],
    '@controllers/barbers/update-barber-user-password-controller': [
      '<rootDir>/src/core/controllers/barbers/update-barber-user-password-controller',
    ],
    '@controllers/barbers/update-barber-user-avatar-controller': [
      '<rootDir>/src/core/controllers/barbers/update-barber-user-avatar-controller',
    ],
    '@controllers/barbers/delete-barber-controller': [
      '<rootDir>/src/core/controllers/barbers/delete-barber-controller',
    ],
    '@controllers/users/delete-user-controller': [
      '<rootDir>/src/core/controllers/users/update-user-controller',
    ],
    '@controllers/appointments/create-appointment-controller': [
      '<rootDir>/src/core/controllers/appointments/create-appointment-controller',
    ],
    '@controllers/appointments/view-appointment-controller': [
      '<rootDir>/src/core/controllers/appointments/view-appointment-controller',
    ],
    '@controllers/appointments/get-all-appointments-controller': [
      '<rootDir>/src/core/controllers/appointments/get-all-appointments-controller',
    ],
    '@controllers/appointments/delete-appointment-controller': [
      '<rootDir>/src/core/controllers/appointments/delete-appointment-controller',
    ],
    '@controllers/users/view-user-profile-controller': [
      '<rootDir>/src/core/controllers/users/view-user-profile-controller',
    ],
    '@controllers/users/authenticate-user-controller': [
      '<rootDir>/src/core/controllers/users/authenticate-user-controller',
    ],
    '@controllers/refresh-tokens/create-refresh-token-controller': [
      '<rootDir>/src/core/controllers/refresh-tokens/create-refresh-token-controller',
    ],
    '@repositories/user-repository': [
      '<rootDir>/src/core/repositories/user-repository',
    ],
    '@repositories/refresh-token-repository': [
      '<rootDir>/src/core/repositories/refresh-token-repository',
    ],
    '@repositories/barber-repository': [
      '<rootDir>/src/core/repositories/barber-repository',
    ],
    '@repositories/appointment-repository': [
      '<rootDir>/src/core/repositories/appointment-repository',
    ],
    '@shared/either': ['<rootDir>/src/domain/shared/either'],
    '@shared/app-error': ['<rootDir>/src/domain/shared/app-error'],
    '@errors/invalid-name-error': [
      '<rootDir>/src/domain/shared/errors/invalid-name-error',
    ],
    '@errors/invalid-datetime-error': [
      '<rootDir>/src/domain/shared/errors/invalid-datetime-error',
    ],
    '@errors/invalid-email-error': [
      '<rootDir>/src/domain/shared/errors/invalid-email-error',
    ],
    '@errors/invalid-password-error': [
      '<rootDir>/src/domain/shared/errors/invalid-password-error',
    ],
    '@errors/invalid-prop-error': [
      '<rootDir>/src/domain/shared/errors/invalid-prop-error',
    ],
    '@errors/invalid-description-error': [
      '<rootDir>/src/domain/shared/errors/invalid-description-error',
    ],
    '@errors/invalid-comment-error': [
      '<rootDir>/src/domain/shared/errors/invalid-comment-error',
    ],
    '@in-memory/in-memory-appointments-repository': [
      '<rootDir>/tests/repositories/in-memory-appointments-repository',
    ],
    '@in-memory/in-memory-barbers-repository': [
      '<rootDir>/tests/repositories/in-memory-barbers-repository',
    ],
    '@in-memory/in-memory-users-repository': [
      '<rootDir>/tests/repositories/in-memory-users-repository',
    ],
    '@in-memory/in-memory-refresh-tokens-repository': [
      '<rootDir>/tests/repositories/in-memory-refresh-tokens-repository',
    ],
    '@in-memory/in-memory-notifications-repository': [
      '<rootDir>/tests/repositories/in-memory-notifications-repository',
    ],
    '@in-memory/in-memory-rating-repository': [
      '<rootDir>/tests/repositories/in-memory-rating-repository',
    ],
  },

  // An array of regexp pattern strings, matched against all module paths before considered 'visible' to the module loader
  // modulePathIgnorePatterns: [],

  // Activates notifications for test results
  // notify: false,

  // An enum that specifies notification mode. Requires { notify: true }
  // notifyMode: "failure-change",

  // A preset that is used as a base for Jest's configuration
  // preset: undefined,

  // Run tests from one or more projects
  // projects: undefined,

  // Use this configuration option to add custom reporters to Jest
  // reporters: undefined,

  // Automatically reset mock state before every test
  // resetMocks: false,

  // Reset the module registry before running each individual test
  // resetModules: false,

  // A path to a custom resolver
  // resolver: undefined,

  // Automatically restore mock state and implementation before every test
  // restoreMocks: false,

  // The root directory that Jest should scan for tests and modules within
  // rootDir: undefined,

  // A list of paths to directories that Jest should use to search for files in
  // roots: [
  //   "<rootDir>"
  // ],

  // Allows you to use a custom runner instead of Jest's default test runner
  // runner: "jest-runner",

  // The paths to modules that run some code to configure or set up the testing environment before each test
  // setupFiles: [],

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  // setupFilesAfterEnv: [],

  // The number of seconds after which a test is considered as slow and reported as such in the results.
  // slowTestThreshold: 5,

  // A list of paths to snapshot serializer modules Jest should use for snapshot testing
  // snapshotSerializers: [],

  // The test environment that will be used for testing
  // testEnvironment: "jest-environment-node",

  // Options that will be passed to the testEnvironment
  // testEnvironmentOptions: {},

  // Adds a location field to test results
  // testLocationInResults: false,

  // The glob patterns Jest uses to detect test files
  // testMatch: [
  //   "**/__tests__/**/*.[jt]s?(x)",
  //   "**/?(*.)+(spec|test).[tj]s?(x)"
  // ],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  // testPathIgnorePatterns: [
  //   "/node_modules/"
  // ],

  // The regexp pattern or array of patterns that Jest uses to detect test files
  // testRegex: [],

  // This option allows the use of a custom results processor
  // testResultsProcessor: undefined,

  // This option allows use of a custom test runner
  // testRunner: "jest-circus/runner",

  // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
  // testURL: "http://localhost",

  // Setting this value to "fake" allows the use of fake timers for functions such as "setTimeout"
  // timers: "real",

  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest'],
  },

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  // transformIgnorePatterns: [
  //   "/node_modules/",
  //   "\\.pnp\\.[^\\/]+$"
  // ],

  // An array of regexp pattern strings that are matched against all modules before the module loader will automatically return a mock for them
  // unmockedModulePathPatterns: undefined,

  // Indicates whether each individual test should be reported during the run
  // verbose: undefined,

  // An array of regexp patterns that are matched against all source file paths before re-running tests in watch mode
  // watchPathIgnorePatterns: [],

  // Whether to use watchman for file crawling
  // watchman: true,
};
