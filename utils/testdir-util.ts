export const getTestDirConfig = () => {
  // Determine the testType from the environment variable, default to 'app' if not set
  const testType = process.env.TEST_TYPE?.trim()|| 'app';
  
  // Normalize and log the testType
  console.log('Normalized testType:', `'${testType}'`);
  
  if (testType === 'storybook') {
    return {
      // outputDir: '.features-gen/storybook',
      paths: ['./test/storybook/components/**/*.feature'],
      require: ['./test/storybook/**/*.ts', 'config/*.ts'],
      featuresRoot: './test/storybook/components',
    };
  } else if (testType === 'app') {
    return {
      // outputDir: '.features-gen/app',
      paths: ['./test/app/features'],
      require: ['./test/app/**/*.ts', './config/*.ts'],
      featuresRoot: './test/app/features',
    };
  } else {
    console.error(`Invalid test type: '${testType}'. Must be 'storybook' or 'app'.`);
    throw new Error(`Invalid test type: '${testType}'. Must be 'storybook' or 'app'.`);
  }
};

export const getWorkersCount= () => {
  /*Read workers count from environment variable or default to 5*/
const workersCount = process.env.WORKERS ? parseInt(process.env.WORKERS) : (process.env.CI ? 5 : 5);
return workersCount;
}
