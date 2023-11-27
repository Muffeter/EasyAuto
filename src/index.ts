import { parseStep, executeStep } from './converter'

//main function to execute the script, polling when one of the step is not finished
export const executeScript = async (path: string) => {
  const steps = parseStep(path)
  for (let i = 0; i < steps.length; i++) {
    const step = steps[i]
    do {
      await new Promise((resolve) => setTimeout(resolve, 100))
    } while (!(await executeStep(step)))
  }
}

executeScript(process.argv[1] || "Config.yaml")
