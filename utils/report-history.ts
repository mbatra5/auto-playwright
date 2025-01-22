import * as fs from "fs-extra";
import * as path from "path";

const allureReportPath = path.resolve("./allure-report");
const allureResultsPath = path.resolve("./allure-results");
const historySource = path.join(allureReportPath, "history");
const historyDestination = path.join(allureResultsPath, "history");

// Function to automate history management
async function manageHistory() {
  try {
    // Check if allure-report/history exists
    if (fs.existsSync(historySource)) {
      console.log("Found history folder in allure-report.");
      
      // Ensure allure-results directory exists
      await fs.ensureDir(allureResultsPath);

      // Clear any existing history in allure-results
      await fs.remove(historyDestination);
      
      // Copy history folder to allure-results
      await fs.copy(historySource, historyDestination);
      console.log("History folder copied successfully.");
    } else {
      console.log("No history folder found in allure-report. Skipping history copy.");
    }
  } catch (error) {
    console.error("Error managing history folder:", error);
  }
}

manageHistory();
