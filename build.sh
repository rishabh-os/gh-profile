#!/bin/bash
# ? I pass the build date to the process as an env variable so that it doesn't change whenever the website is rendered on the server

DATE_WITH_TIME=`date "+%Y-%m-%d"`

NEXT_PUBLIC_LASTMOD=$DATE_WITH_TIME pnpm next build