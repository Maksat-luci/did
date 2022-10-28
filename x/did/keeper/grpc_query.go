package keeper

import (
	"itachi/x/did/types"
)

var _ types.QueryServer = Keeper{}
