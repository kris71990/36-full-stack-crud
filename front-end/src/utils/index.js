export default function autoBind(component) {
  const classMethods = Object.getOwnPropertyNames(component.prototype);
  classMethods.forEach((method) => {
    if (method.startsWith('handle')) {
      this[method] = this[method].bind(this);
    }
  });
}

export const validateDog = (payload) => {
  if (!payload._id) {
    throw new Error('Validation error, no id');
  } 

  if (!payload.firstName || !payload.location) {
    throw new Error('Missing required properties');
  }
};
