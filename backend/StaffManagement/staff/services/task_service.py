# staff/services/task_service.py

from .base_service import BaseService
from staff.models.task import Task
from django.contrib.contenttypes.models import ContentType
from django.core.exceptions import ValidationError
from datetime import date

class TaskService(BaseService):
    def validate(self, task_data):
        required_fields = ['staff', 'title', 'due_date']
        for field in required_fields:
            if field not in task_data or not task_data[field]:
                raise ValidationError(f"'{field}' is required")

        if task_data['due_date'] < date.today():
            raise ValidationError("Due date cannot be in the past")

    def assign_task(self, staff, title: str, description: str, due_date):
        task_data = {
            "staff": staff,
            "title": title,
            "due_date": due_date
        }
        self.validate(task_data)

        task = Task.objects.create(
            staff_type=ContentType.objects.get_for_model(staff.__class__),
            staff_id=staff.id,
            title=title,
            description=description,
            due_date=due_date
        )
        self.log(f"Task '{title}' assigned to {staff}")
        return task

    def update_task_status(self, task_id: int, status: str):
        if status not in dict(Task.STATUS_CHOICES):
            raise ValidationError("Invalid status")

        task = Task.objects.get(id=task_id)
        task.status = status
        task.save()
        self.log(f"Task #{task_id} status updated to '{status}'")
        return task

    def get_tasks_for_staff(self, staff):
        return Task.objects.filter(
            staff_type=ContentType.objects.get_for_model(staff.__class__),
            staff_id=staff.id
        ).order_by('-due_date')
