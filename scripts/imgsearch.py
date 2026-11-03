#!/usr/bin/env python3
"""Run z-ai image-search and print resulting URLs. Usage: imgsearch.py "query" [count]"""
import json, subprocess, sys

query = sys.argv[1]
count = sys.argv[2] if len(sys.argv) > 2 else "5"
cmd = ["z-ai", "image-search", "-q", query, "-c", count, "--gl", "us", "--no-rank"]
out = subprocess.run(cmd, capture_output=True, text=True, timeout=300).stdout
# JSON starts at first '{'
idx = out.find("{")
if idx == -1:
    print("NO_JSON_OUTPUT")
    print(out[:500])
    sys.exit(1)
try:
    data = json.loads(out[idx:])
except Exception as e:
    print("PARSE_ERR", e)
    print(out[:500])
    sys.exit(1)
print("success:", data.get("success"), "count:", data.get("count"))
for r in data.get("results", []):
    print(r["original_url"], r.get("original_width"), r.get("original_height"), "|", r.get("source", ""))
