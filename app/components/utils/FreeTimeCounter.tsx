import { FormData as MyFormData } from "../contexts/CounterContext";

export function freeTimeCounter(updatedFormData: MyFormData, e: any) {
  // Rozdělení času na hodiny a minuty
  // const [start_work_hours, start_work_minutes] =
  //   e.target.elements.start_work.value.split(":").map(Number);
  // const [end_work_hours, end_work_minutes] = e.target.elements.end_work.value
  //   .split(":")
  //   .map(Number);

  function time_to_duration(time: string) {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
  }
  const start_work = time_to_duration(e.target.elements.start_work.value);
  const end_work = time_to_duration(e.target.elements.end_work.value);
  const sleep_time = time_to_duration(e.target.elements.sleep_time.value);
  const wakeup_time = time_to_duration(e.target.elements.wakeup_time.value);

  const morning_preparation =
    parseInt(e.target.elements.morning_hours.value) * 60 +
    parseInt(e.target.elements.morning_minutes.value);

  // const morning_preparation = `${morning_hours.padStart(
  //   2,
  //   "0"
  // )}:${morning_minutes.padStart(2, "0")}`;

  // updatedFormData.current.times.start_work =
  //   e.target.elements.start_work.value;

  updatedFormData.current.times.morning_preparation = morning_preparation;
  updatedFormData.current.times.sleep_time = sleep_time;
  updatedFormData.current.times.wakeup_time = wakeup_time;
  updatedFormData.current.times.start_work = start_work;
  updatedFormData.current.times.end_work = end_work;
}
