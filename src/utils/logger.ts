import pino from "pino";
import dayjs from "dayjs";
import pretty from "pino-pretty";

const log = pino(
  {
    base: {
      pid: false,
    },
    timestamp: () => `"time":"${dayjs().format()}"`,
  },
  pretty({
    colorize: true, // Adds colors to your log output
    translateTime: "SYS:standard", // Formats timestamp
    ignore: "pid,hostname", // Optionally, ignore pid and hostname
  })
);

export default log;
