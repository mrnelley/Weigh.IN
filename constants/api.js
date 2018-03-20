// export const fetchUsers = () =>
//   fetch("http://localhost:3000/api/users")
//     .then(res => res.json());
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api';

const fakeGroupId = '5aa70f47c58cba576a1fb0b';

class EventApi {
  constructor() {
    this.groupId = fakeGroupId;
    this.path = '/groups/${this.groupId}/events';
  }

  async fetchGroupsEvents() {
    const { data } = await axios.get(this.path);

    return data.events;
  }
}

export {
  EventApi,
};
