import React from 'react'

const TaskTable = () => {
    return (
        <table className="table-task table table-striped table-hover">
            <thead>
              <tr>
                <th>Date</th>
                <th>Id</th>
                <th>Title</th>
                <th>Status</th>
                <th>Detail</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>la date ici</td>
                <td>le Id ici</td>
                <td>le Title ici</td>
                <td>le Status ici</td>
                <td>le Detail ici</td>
              </tr>
            </tbody>
          </table>
    )
}

export default TaskTable