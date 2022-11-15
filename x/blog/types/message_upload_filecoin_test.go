package types

import (
	"testing"

	"blog/testutil/sample"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
)

func TestMsgUploadFilecoin_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUploadFilecoin
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUploadFilecoin{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUploadFilecoin{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}
