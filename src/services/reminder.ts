import axios from "axios";
import Reminder from "../models/reminder";

class ReminderService {
  http = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
  });

  async getReminers() {
    const response = await this.http.get<Reminder[]>("/todos");
    return response.data;
  }

  async addReminder(title: string) {
    const response = await this.http.post<Reminder>("/todos", { title });
    return response.data;
  }

  removeReminder(id: number) {
    this.http.delete("/todos/" + id);
  }

  async updateReminder(id: number, title: string) {
    const response = await this.http.put<Reminder>("/todos/" + id, { title });
    return response.data;
  }
}

//exporting an instance of this class so we dont have to use the new keyword everytime when accessing the instance of this class everytime
export default new ReminderService();
