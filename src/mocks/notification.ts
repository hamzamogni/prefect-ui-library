import { Notification } from '@/models/Notification'
import { MockFunction } from '@/services/Mocker'


export const randomNotification: MockFunction<Notification> = function(notification?: Partial<Notification>) {
  return new Notification({
    id: notification?.id ?? this.create('string'),
    created: notification?.created ?? this.create('date'),
    updated: notification?.updated ?? this.create('date'),
    name: notification?.name ?? this.create('string'),
    isActive: notification?.isActive ?? this.create('boolean'),
    states: notification?.states ?? this.createMany('state', 3),
    tags: notification?.tags ?? this.createMany('string', 4),
    blockDocumentId: notification?.blockDocumentId ?? this.create('string'),
  })
}