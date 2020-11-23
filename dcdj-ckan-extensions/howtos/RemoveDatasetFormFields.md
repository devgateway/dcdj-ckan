# Remove Custon Fields 
Ckan comes with a set of custom fields that can be removed if needed in order to do this edit

```
pathToCkan/ckan/default/src/ckan/ckan/templates/package/snippets/package_metadata_fields.html
```
```
{#
 {% block package_metadata_fields_custom %}
      {% block custom_fields %}
        {% snippet 'snippets/custom_form_fields.html', extras=data.extras, errors=errors, limit=3 %}
      {% endblock %}
    {% endblock %}
#}
```

*Comment this block as shown above*