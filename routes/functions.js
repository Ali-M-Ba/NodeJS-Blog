// Functions

function addNewObject(array, title, body) {
  array.push({
		_id: Math.floor(Math.random() * 100000) + 1,
		title: title,
		body: body,
		createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
	});
}

function findObjectById(array, id) {
	return array.find(obj => obj._id === id);
}

function findByIdAndUpdate(array, id, updatedValues) {
  const index = array.findIndex(obj => obj._id === id);
  if (index !== -1) {
    array[index] = {
      ...array[index],
      title: updatedValues.title,
      body: updatedValues.body,
      updatedAt: new Date().toDateString()
    };
  } else {
    throw new Error('Object not found');
  }
}

function findByIdAndDelete(array, id) {
  const index = array.findIndex(obj => obj._id === id);
  if (index !== -1) {
    array.splice(index, 1);
  } else {
    throw new Error('Object not found');
  }
};

export { addNewObject, findObjectById, findByIdAndUpdate, findByIdAndDelete }