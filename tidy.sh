#!/bin/bash

# Remove unneeded files from the streamsheets folder

FILES="
	*.log
	*.map
	.editorconfig
	.eslintrc
	.gitignore
	.travis.yml
	API.md
	AUTHORS.md
	CHANGE*.md
	CHANGELOG.md
	CODE_OF_CONDUCT.md
	CONTRIBUTING.md
	CONTRIBUTORS.md
	DEPENDENCIES.md
	ERROR-HANDLING.md
	GOVERNANCE.md
	HISTORY.md
	JSONSelect.md
	LIMITS.md
	PROTOCOL.md
	PULL_REQUEST_TEMPLATE.md
	Porting-Buffer.md
	README.md
	README_*.md
	SPECS.md
	TODO.md
	UPGRADE_GUIDE.md
	UPGRADING.md
	authorization.md
	create-rule.md
	http_signing.md
	snapshot.md
	"

for a in $FILES; do
	/usr/bin/find streamsheets/ -iname ${a} -exec rm {} ';'
done

DIRS="
	coverage
	doc
	docs
	readme
	.github
	"

for a in $DIRS; do
	/usr/bin/find streamsheets/ -iname ${a} -exec rm -rf {} ';'
done


rm -rf streamsheets/npm-packages-offline-cache
rm -f streamsheets/node_modules/napi-build-utils/index.md
