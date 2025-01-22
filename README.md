# qa_automation

## How to run it locally

1. Clone repo
   ```
   git clone git@ssh.dev.azure.com:v3/bp-digital/FNC-AECF-AE_Group_Tech_and_Corporate_Functions/nvp-site-generator
 
   ```
2. CD into directory
   ```
   cd qa_automation

3. Install dependencies

   Go to /qa_automation folder. Open command line and navigate to the qa_automation, and run the following command:

   ```
   npm install
   ```
   This will install all required dependencies as described in package.json

4. Install browsers
   ```
   npx playwright install
   ```
5. Set environment variables for environment, test dir and workers
   ```
   cross-env ENV=CANARY TEST_TYPE=app WORKERS=4
   
   NODE_ENV defines which environment URL needs to be picked, TEST_TYPE is required to fetch the test directory where exactally our test script path is and Workers will define how many workers/browser will invoke.

6. Run tests

   Now you can run the test with npm command.
   
   ```
   npm run canary:smoke
   npm run dev:component
   ```

7. Check out the report

   ```
   npx playwright show-report
   ```

   Run this command or alternatively go to the playwright-report folder inside /qa_automation

8. Check out the allure report

   ```
   npm run generate-report
   npm run open-report
   ```

   ## Folder structure

After cloning this repository this is the file structure :

```

└── qa_automation/
    ├── test/
    │       ├── app/
    │       │   ├── feature/
    │       │   │   ├── homepage.feature
    │       │   │   ├── header.feature
    │       │   │   
    │       │   ├── page-objects/
    │       │   │   ├── homepage.ts
    │       │   │   
    │       │   └── step-defination/
    │       │   |    ├── homepage.ts
    │       │   |    ├── header.ts
    |       |   └── test-data  
    |       |        ├──pageURL.json
    │       │      
    │       └── storybook/
    │           └── components/
    │               ├── card/
    │               │   ├── card.feature
    │               │   ├── card-pageobject.ts
    │               │   ├── card.ts
    │               │   └── card.json
    │               └── button/
    │                   ├── button.feature
    │                   ├── button-pageobject.ts
    │                   ├── button.ts
    │                   └── button.json     
    ├── config/
    │   ├── env_config/
    │   │   └── env.env
    │   └── fixtures.ts
    ├── node_modules
    ├── playwright-report
    ├── utils/
    │   ├── allure-util.ts
    │   ├── env-util.ts
    │   └── generic-utils.ts
    │   └── report-history.ts 
    │   └── testdir-utils.ts
    ├── package.json
    ├── playwrightconfig.ts
    └── tsconfig.json


```