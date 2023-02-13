const ENDPOINT = 'https://glo3102lab4.herokuapp.com';

/* POST /users */
export const createUser = async () => {
    const response = await fetch(`${ENDPOINT}/users`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
    });

    if (response.status !== 200) {
        throw new Error("Une erreur est survenue");
    }

    const data = await response.json();
    return data.id;
}

/* GET /userId/tasks */
export const getTasks = async (userId) => {
    const response = await fetch(`${ENDPOINT}/${userId}/tasks`);
    const data = await response.json();
    return data.tasks;
}

/* POST /userId/tasks */
export const createTask = async (userId, task) => {
    const response = await fetch(`${ENDPOINT}/${userId}/tasks`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": task
            })
    });

    if (response.status !== 200) {
        throw new Error("Une erreur est survenue");
    }

    const data = await response.json();
    return data;
}

/* PUT /userId/tasks/id */
export const modifyTask = async (userId, taskId, task) => {
    const response = await fetch(`${ENDPOINT}/${userId}/tasks/${taskId}`,
        {
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              "name": task
            })
    });

    if (response.status !== 200) {
        throw new Error("Une erreur est survenue");
    }

    const data = await response.json();
    return data;
}

/* DELETE /userId/tasks/id */
export const deleteTask = async (userId, taskId) => {
    const response = await fetch(`${ENDPOINT}/${userId}/tasks/${taskId}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
    });

    if (response.status !== 200) {
        throw new Error("Une erreur est survenue");
    }
}
