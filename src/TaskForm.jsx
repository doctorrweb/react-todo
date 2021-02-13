import React from 'react'

const TaskForm = () => {
    return (
        <form>
            <div className="mb-3">
              <label for="task-title" className="form-label">Task Title</label>
              <input type="text" className="form-control" id="task-title" placeholder="Add a Title" />
            </div>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="is-active" checked />
              <label className="form-check-label" for="is-active">Active</label>
            </div>
            <div className="mb-3">
              <label for="task-detail" className="form-label">Example textarea</label>
              <textarea className="form-control" id="task-detail" rows="3"></textarea>
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary mb-3">Add a new Task</button>
            </div>
          </form>
    )
}

export default TaskForm