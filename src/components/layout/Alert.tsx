import React from 'react'

interface Props {
  message: string;
  alertType?: string;
}

const Alert: React.FC<Props> = ({message, alertType}) => {
  return (
    <div className={"flex items-center bg-light text-dark px-2 py-4 rounded-sm"}>
    <i className="fas fa-info-circle mr-2" />
    <h1>{message}</h1>
  </div>
)
}

export default Alert
