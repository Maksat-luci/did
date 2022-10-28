package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	testkeeper "itachi/testutil/keeper"
	"itachi/x/did/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.DidKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
