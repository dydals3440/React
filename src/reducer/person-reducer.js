export default function personReducer(person, action) {
  switch (action.type) {
    case "updated": {
      // 아래 코드들을 object deconstructing 한 것
      const { prev, current } = action;
      // const prev = action.prev;
      // const current = action.current;
      return {
        ...person,
        mentors: person.mentors.map((mentor) => {
          return mentor.name === prev ? { ...mentor, name: current } : mentor;
        }),
      };
    }
    case "added": {
      const { name, title } = action;
      return {
        ...person,
        mentors: [...person.mentors, { name, title }],
      };
    }
    case "deleted": {
      return {
        ...person,
        mentors: person.mentors.filter((mentor) => mentor.name !== action.name),
      };
    }
    default: {
      throw Error(`알수없는 액션 타입입니다: ${action.type}`);
    }
  }
}
