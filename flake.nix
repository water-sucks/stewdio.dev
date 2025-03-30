{
  description = "stewdio.dev";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
  };

  outputs = inputs @ {flake-parts, ...}:
    flake-parts.lib.mkFlake {inherit inputs;} {
      systems = inputs.nixpkgs.lib.systems.flakeExposed;

      perSystem = {pkgs, ...}: {
        devShells.default = pkgs.mkShell {
          name = "stewdio-dev-shell";
          buildInputs = with pkgs; [
            nodejs_22
          ];
        };
      };
    };
}
