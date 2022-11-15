package cli

import (
	"strconv"

	"blog/x/blog/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdUploadFilecoin() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "upload-filecoin [auth-token] [content]",
		Short: "Broadcast message uploadFilecoin",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argAuthToken := args[0]
			argContent := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUploadFilecoin(
				clientCtx.GetFromAddress().String(),
				argAuthToken,
				argContent,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
