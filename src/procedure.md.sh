#!/bin/sh

# cat ~/Desktop/export_2019-02-02-03-03-09-824.jsonl | jq  '._line'
cat ~/Desktop/export_2019-02-02-03-03-09-824.jsonl | jq  '._line | match(userId: (.[^,]+), )'
cat ~/Desktop/export_2019-02-02-03-03-09-824.jsonl | jq  ' ._line | match(userId: (.[^,]+), ) | .captures[].string  '

cat ~/Desktop/export_2019-02-02-03-03-09-824.jsonl | jq -s -c '.[] | ._line | match(userId: (.[^,]+), ) | .captures[].string '  | wc -l # 493 users
cat ~/Desktop/export_2019-02-02-03-03-09-824.jsonl | jq --slurp -c '[.[] | ._line | match(userId: (.[^,]+), ) | .captures[].string] | unique | .[]'  | wc -l # 334 users

cat ~/Desktop/export_2019-02-02-03-03-09-824.jsonl | jq  '._line | match(userId: (.[^,]+), ) | .captures[].string' | wc -l # slightly less wordy L7,


cat ~/Desktop/export_2019-02-02-03-03-09-824.jsonl | jq --slurp '[.[] | ._line | match("userId: (.[^,]+), ").captures[0].string] | unique | length'  # 336 users, so iirc ~48 per day

# yesterday's deleted: dear god, after 10 minutes the query hasn't finished:
# `select count(*) from transactions where deleted_at is not null and date = '2019-02-03';`
#
# better as an estimate instead of an exact, with an explain clause:
# `explain select count(*) from transactions where deleted_at is not null and date = '2019-02-03';`
# that's ~2664 for yesterday, so (48 users/2664 transactions per day)  so over 1% isn't getting deleted. that seems like a lot/non-negligible.
# it'll be more when we find out the number of transactions, not users.


cat ~/Desktop/export_2019-02-04-16-38-13-822.jsonl | jq ' ._line | match("txn ids: (.[^"]+)") | .captures[0].string | split(,) | .[] | ltrimstr( )' | wc -l
