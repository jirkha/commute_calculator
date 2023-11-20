import { FormData as MyFormData } from "../contexts/CounterContext";

export function freeTimeCounter(updatedFormData: MyFormData, e: any) {
  // Rozdělení času na hodiny a minuty
  // const [start_work_hours, start_work_minutes] =
  //   e.target.elements.start_work.value.split(":").map(Number);
  // const [end_work_hours, end_work_minutes] = e.target.elements.end_work.value
  //   .split(":")
  //   .map(Number);

  //console.log("start_work", e.target.elements);

  function time_to_duration(time: string) {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
  }
  const start_work = time_to_duration(e.target.elements.start_work.value);
  const end_work = time_to_duration(e.target.elements.end_work.value);
  const sleep_time = time_to_duration(e.target.elements.sleep_time.value);
  const wakeup_time = time_to_duration(e.target.elements.wakeup_time.value);

  // Výpočet doby spánku apod.
  function calculate_duration_minutes(start_time: number, finish_time: number) {
    let duration_minutes;
    if (start_time < finish_time) {
      duration_minutes = finish_time - start_time;
    } else {
      duration_minutes = 1440 - start_time + finish_time;
    }
    return duration_minutes;
  }

  const sleep_duration = calculate_duration_minutes(sleep_time, wakeup_time);
  const work_duration = calculate_duration_minutes(start_work, end_work);
  const travel_duration_current = 2 * updatedFormData.current.times.travel_time;
  const travel_duration_planned = 2 * updatedFormData.planned.times.travel_time;
  
  const free_time_current =
    1440 - sleep_duration - work_duration - travel_duration_current;
  const free_time_planned =
    1440 - sleep_duration - work_duration - travel_duration_planned;

  const free_time_difference = free_time_current - free_time_planned;

  updatedFormData.current.times.sleep_time = sleep_time;
  updatedFormData.current.times.wakeup_time = wakeup_time;
  updatedFormData.current.times.start_work = start_work;
  updatedFormData.current.times.end_work = end_work;
  updatedFormData.current.times.work_duration = work_duration;
  updatedFormData.general.free_time_difference = free_time_difference
}
