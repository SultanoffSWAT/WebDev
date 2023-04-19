from django.db import models

# Create your models here.


# class Vacancy(models.Model):
#     pass


class Company(models.Model):
    name = models.CharField(max_length=255, null=True)
    description = models.TextField(null=True)
    city = models.CharField(max_length=255, null=True)
    address = models.TextField(null=True)

    # def to_json(self):
    #     return{
    #         'id': self.id,
    #         'name': self.name,
    #         'description': self.description,
    #         'city': self.city,
    #         'address': self.address,
    #     }


class Vacancy(models.Model):
    name = models.CharField(max_length=255, null=True)
    description = models.TextField(null=True)
    salary = models.FloatField(null=True)
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='company')
    #
    # def to_json(self):
    #     return{
    #         'id': self.id,
    #         'name': self.name,
    #         'description': self.description,
    #         'salary': self.salary,
    #     }


