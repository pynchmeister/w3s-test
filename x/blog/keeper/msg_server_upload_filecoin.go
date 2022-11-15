package keeper

import (
	"context"

	"blog/x/blog/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) UploadFilecoin(goCtx context.Context, msg *types.MsgUploadFilecoin) (*types.MsgUploadFilecoinResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgUploadFilecoinResponse{}, nil
}
