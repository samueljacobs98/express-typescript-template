import appInsights from "applicationinsights"
import config from "../config"

export function initialiseAppInsights() {
  if (config.appInsights.connectionString) {
    appInsights
      .setup(config.appInsights.connectionString)
      .setAutoDependencyCorrelation(true)
      .setAutoCollectRequests(true)
      .setAutoCollectPerformance(true, true)
      .setAutoCollectExceptions(true)
      .setAutoCollectDependencies(true)
      .setAutoCollectConsole(true, true)
      .setUseDiskRetryCaching(true)
      .setSendLiveMetrics(false)
      .start()
  } else {
    console.warn("No App Insights connection string provided")
  }
}
