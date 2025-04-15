
class MedicalHistoryIterator:
    def __init__(self, history_list):
        # Sort entries by visit_date in descending order (latest first)
        self._history = sorted(history_list, key=lambda h: h.visit_date, reverse=True)
        self._index = 0

    def __iter__(self):
        return self

    def __next__(self):
        if self._index < len(self._history):
            result = self._history[self._index]
            self._index += 1
            return result
        raise StopIteration


class MedicalHistoryCollection:
    def __init__(self, history_queryset):
        self._history = list(history_queryset)

    def __iter__(self):
        return MedicalHistoryIterator(self._history)

    def __len__(self):
        return len(self._history)

    def latest(self):
        # Returns the most recent history record, or None if empty.
        return max(self._history, key=lambda h: h.visit_date, default=None)

    def by_year(self, year):
        # Returns a list of records for the specified year.
        return [h for h in self._history if h.visit_date.year == year]
