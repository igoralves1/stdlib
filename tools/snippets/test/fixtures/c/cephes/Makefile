
# VARIABLES #

ifndef VERBOSE
	QUIET := @
endif

# Specify the path to Cephes:
CEPHES ?=

# Specify a list of Cephes source files:
CEPHES_SRC ?=

# Determine the OS:
#
# [1]: https://en.wikipedia.org/wiki/Uname#Examples
# [2]: http://stackoverflow.com/a/27776822/2225624
OS ?= $(shell uname)
ifneq (, $(findstring MINGW,$(OS)))
	OS := WINNT
else
ifneq (, $(findstring MSYS,$(OS)))
	OS := WINNT
else
ifneq (, $(findstring CYGWIN,$(OS)))
	OS := WINNT
endif
endif
endif

# Define the program used for compiling C source files:
ifdef C_COMPILER
	CC := $(C_COMPILER)
else
	CC := gcc
endif

# Define the command-line options when compiling C files:
CFLAGS ?= \
	-std=c99 \
	-O3 \
	-Wall \
	-pedantic

# Determine whether to generate [position independent code][1]:
#
# [1]: https://gcc.gnu.org/onlinedocs/gcc/Code-Gen-Options.html#Code-Gen-Options
# [2]: http://stackoverflow.com/questions/5311515/gcc-fpic-option
ifeq ($(OS), WINNT)
	fPIC ?=
else
	fPIC ?= -fPIC
endif

# List of C targets:
c_targets := runner.out


# TARGETS #

# Default target.
#
# This target is the default target.

all: $(c_targets)

.PHONY: all


# Compile C source.
#
# This target compiles C source files.

$(c_targets): %.out: %.c
	$(QUIET) $(CC) $(CFLAGS) $(fPIC) -o $@ $(CEPHES_SRC) $< -lm


# Generate test fixtures.
#
# This target generates test fixtures.

run: $(c_targets)
	$(QUIET) ./$<

.PHONY: run


# Perform clean-up.
#
# This target removes generated files.

clean:
	$(QUIET) -rm -f *.o *.out

.PHONY: clean


# Remove fixtures.
#
# This target removes fixture data.

clean-fixtures:
	$(QUIET) -rm -f *.json

.PHONY: clean-fixtures
