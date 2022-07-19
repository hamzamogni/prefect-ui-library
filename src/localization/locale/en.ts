export const en = {
  docs: {
    flows: 'https://orion-docs.prefect.io/concepts/flows/',
    flowRuns: 'https://orion-docs.prefect.io/ui/dashboard/',
    blocks: 'https://orion-docs.prefect.io/ui/blocks/',
    workQueues: 'https://orion-docs.prefect.io/ui/work-queues/',
    notifications: 'https://orion-docs.prefect.io/ui/notifications/',
    deployments: 'https://orion-docs.prefect.io/ui/deployments/',
  },
  error: {
    activateDeployment: 'Failed to activate deployment',
    pauseDeployment: 'Failed to pause deployment',
    submitNotification: 'Failed to submit notification',
    activateNotification: 'Failed to activate notification',
    pauseNotification: 'Failed to pause notification',
    activateWorkQueue: 'Failed to activate work queue',
    pauseWorkQueue: 'Failed to pause work queue',
    delete: (type: string) => `Failed to delete ${type}`,
    scheduleFlowRun: 'Failed to schedule flow run',
    createWorkQueue: 'Failed to create work queue',
    updateWorkQueue: 'Failed to update work queue',
    updateBlock: 'Failed to update block',
    createBlock: 'Failed to create block',
    createNotification: 'Failed to create notification',
    updateNotification: 'Failed to update notification',
  },
  success: {
    activateDeployment: 'Deployment active',
    pauseDeployment: 'Deployment paused',
    activateNotification: 'Notification active',
    pauseNotification: 'Notification paused',
    activateWorkQueue: 'Work queue active',
    pauseWorkQueue: 'Work queue paused',
    delete: (type: string) => `${type} deleted successfully!`,
    scheduleFlowRun: 'Flow run scheduled',
    createWorkQueue: 'Work queue has been created',
    updateWorkQueue: 'Work queue has been updated',
    updateBlock: 'Block updated successfully',
    createBlock: 'Block created successfully',
    createNotification: 'Notification created successfully',
    updateNotification: 'Updated notification successfully',
  },
}