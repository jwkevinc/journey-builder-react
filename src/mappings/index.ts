export default {
  id: 1,
  method: 'trigger',
  data: {
  },
  next: {
    id: 2,
    method: 'email',
    data: {
    },
    next: {
      id: 3,
      method: 'condition',
      data: {
      },
      yes: {
        id: 4,
        method: 'email',
        data: {
        },
        next: {
          id: 5,
          method: 'delay2 ',
          data: {
          },
          next: undefined
        }
      },
      no: {
        id: 6,
        method: 'delay',
        data: {
        },
        next: {
          id: 7,
          method: 'condition',
          data: {
          },
          yes: {
            id: 8,
            method: 'webhook',
            data: {},
            next: undefined,
          },
          no: {
            id: 9,
            method: 'experience',
            data: {},
            next: undefined
          }
        }
      }
    }
  }
}