function conflictError(message: string): { name: string; message: string } {
  return {
    name: "ConflictError",
    message,
  };
}

function notFoundError(): { name: string; message: string } {
  return {
    name: "NotFoundError",
    message: "No result for this search!",
  };
}

export default {
  conflictError,
  notFoundError,
};
