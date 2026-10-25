import json
import os
import unittest
from unittest.mock import MagicMock, patch

os.environ.setdefault("TABLE_NAME", "test-table")
os.environ.setdefault("AWS_DEFAULT_REGION", "us-east-1")

import counter  # noqa: E402


class CounterTest(unittest.TestCase):
    def test_returns_incremented_count(self):
        table = MagicMock()
        table.update_item.return_value = {"Attributes": {"hits": 42}}
        with patch.object(counter, "get_table", return_value=table):
            res = counter.handler({}, None)
        self.assertEqual(res["statusCode"], 200)
        self.assertEqual(json.loads(res["body"]), {"count": 42})
        self.assertEqual(res["headers"]["Cache-Control"], "no-store")
        table.update_item.assert_called_once()


if __name__ == "__main__":
    unittest.main()
