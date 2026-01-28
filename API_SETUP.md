# Настройка подключения к Django Backend

## Конфигурация API

Чтобы подключить фронтенд к вашему Django бекенду, выполните следующие шаги:

### 1. Настройте URL бекенда

Откройте файл `/src/app/config/api.ts` и замените `API_BASE_URL` на адрес вашего Django сервера:

```typescript
// Локальная разработка
const API_BASE_URL = 'http://localhost:8000/api';

// Или для продакшена
const API_BASE_URL = 'https://ваш-домен.com/api';
```

### 2. Структура Django API

Ваш Django бекенд должен предоставлять следующий endpoint:

#### POST `/api/job-applications/`

**Тело запроса (JSON):**
```json
{
  "jobTitle": "Название вакансии",
  "phoneNumber": "+996XXXXXXXXX",
  "message": "Сообщение от кандидата"
}
```

**Успешный ответ (201 Created):**
```json
{
  "id": 1,
  "jobTitle": "Название вакансии",
  "phoneNumber": "+996XXXXXXXXX",
  "message": "Сообщение от кандидата",
  "createdAt": "2024-01-28T12:00:00Z"
}
```

**Ошибка (400 Bad Request):**
```json
{
  "error": "Описание ошибки"
}
```

### 3. Пример Django Model

```python
from django.db import models

class JobApplication(models.Model):
    job_title = models.CharField(max_length=200, verbose_name="Название вакансии")
    phone_number = models.CharField(max_length=20, verbose_name="Номер телефона")
    message = models.TextField(blank=True, verbose_name="Сообщение")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")
    
    class Meta:
        verbose_name = "Отклик на вакансию"
        verbose_name_plural = "Отклики на вакансии"
        ordering = ['-created_at']
    
    def __str__(self):
        return f"{self.job_title} - {self.phone_number}"
```

### 4. Пример Django Serializer

```python
from rest_framework import serializers
from .models import JobApplication

class JobApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobApplication
        fields = ['id', 'job_title', 'phone_number', 'message', 'created_at']
        read_only_fields = ['id', 'created_at']
```

### 5. Пример Django View

```python
from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import JobApplication
from .serializers import JobApplicationSerializer

class JobApplicationViewSet(viewsets.ModelViewSet):
    queryset = JobApplication.objects.all()
    serializer_class = JobApplicationSerializer
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
```

### 6. Пример Django URLs

```python
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import JobApplicationViewSet

router = DefaultRouter()
router.register(r'job-applications', JobApplicationViewSet, basename='job-application')

urlpatterns = [
    path('api/', include(router.urls)),
]
```

### 7. Настройка CORS в Django

Установите `django-cors-headers`:

```bash
pip install django-cors-headers
```

Добавьте в `settings.py`:

```python
INSTALLED_APPS = [
    # ...
    'corsheaders',
    # ...
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',  # Должен быть в начале
    # ...
]

# Для разработки (разрешить все)
CORS_ALLOW_ALL_ORIGINS = True

# Или для продакшена (указать конкретные домены)
CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",  # Vite dev server
    "https://ваш-домен.com",
]
```

### 8. Тестирование API

Вы можете протестировать API с помощью curl или Postman:

```bash
curl -X POST http://localhost:8000/api/job-applications/ \
  -H "Content-Type: application/json" \
  -d '{
    "jobTitle": "Строитель-отделочник",
    "phoneNumber": "+996555123456",
    "message": "Здравствуйте, хочу откликнуться на вакансию"
  }'
```

## Проверка работы

1. Запустите Django сервер: `python manage.py runserver`
2. Запустите фронтенд: `npm run dev`
3. Откройте браузер на `http://localhost:5173`
4. Перейдите в раздел "Работа"
5. Нажмите "Откликнуться" на любой вакансии
6. Заполните форму и отправьте
7. Проверьте в Django admin или базе данных, что отклик сохранился

## Возможные проблемы

### CORS ошибка

Если видите ошибку CORS в консоли браузера, убедитесь что:
- Установлен `django-cors-headers`
- Middleware добавлен в `settings.py`
- CORS настроен правильно

### 404 Not Found

Убедитесь что:
- URL в `/src/app/config/api.ts` совпадает с вашим Django сервером
- Endpoint `/api/job-applications/` существует в Django

### 500 Internal Server Error

Проверьте логи Django сервера для подробной информации об ошибке.
