#!/usr/bin/perl5

use strict;
use warnings;

use CGI;
use CGI::Ajax;

use Data::Dump 'dump';


my $cgi =  new CGI();
my $ajax = new CGI::Ajax('create_grid' => \&create_grid);
print $ajax->build_html($cgi,\&Show_HTML,{-charset=>'UTF-8'});

my $grid = &create_grid();

sub create_grid{
	my ($grid) = @_;
	
	$grid = &set_grid($grid);
	$grid = &create_room($grid);

	dump $grid;
	return $grid;
}


sub set_grid{
	my ($grid) = @_;
	
	my $gridx = $grid->{'size_x'} = 10 + int(rand(14 - 10 + 1));
	my $gridy = $grid->{'size_y'} = 10 + int(rand(14 - 10 + 1));
	for my $i (0..$gridy){
		for my $j (0..$gridx){
			$grid->{'point'}[$i][$j] = "X";
		}
	}

	return $grid;
}

sub create_room{
	my ($grid) = @_;
	my $point = $grid->{'point'};
	my $roomdx = 4 + int(rand(4 - 7 + 1));
	my $roomdy = 4 + int(rand(4 - 7 + 1));
	my $roomx = int(rand($grid->{'size_x'} - $roomdx));
	my $roomy = int(rand($grid->{'size_y'} - $roomdy));

	print "\n$roomdx\n";
	print "$roomdy\n";
	for my $i ($roomx..$roomx + $roomdx){
		for my $j ($roomy..$roomy + $roomdy){
			$point->[$i][$j] = " ";
		}
	}

	return $grid;

}










# Grid code, leave until later.
#use Data::Dump 'dump';

#my @mapi = ();


#print "$gridx\n";
#print "$gridy\n";

#for my $i (0..10){
#	for my $j (0..10){
#		$mapi[$i][$j] = ["O"];
#	}
#}


#dump @mapi;