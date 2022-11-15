package keeper

import (
	"context"

	"blog/x/blog/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) UploadW3S(goCtx context.Context, msg *types.MsgUploadW3S) (*types.MsgUploadW3SResponse, error) {
	// Get the context
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgUploadW3SResponse{}, nil
}
