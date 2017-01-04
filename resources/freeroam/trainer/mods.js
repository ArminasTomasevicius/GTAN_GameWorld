var mainWindow = null;
var invincible = false;

API.onResourceStart.connect(function (sender, e) {
	mainWindow = API.createMenu("Car Mods", 0, 0, 25);
	var linkItem = API.createMenuItem("Car Mods", "");
	resource.trainer.mainWindow.AddItem(linkItem);
	resource.trainer.mainWindow.BindMenuToItem(mainWindow, linkItem);
	resource.trainer.menuPool.Add(mainWindow);
	
	mainWindow.AddItem(addVehicleMod0("Spoilers", 0));
	mainWindow.AddItem(addVehicleMod0("Front Bumper", 1));
	mainWindow.AddItem(addVehicleMod0("Rear Bumper", 2));
	mainWindow.AddItem(addVehicleMod0("Side Skirt", 3));
	mainWindow.AddItem(addVehicleMod0("Exhaust", 4));
	mainWindow.AddItem(addVehicleMod0("Frame", 5));
	mainWindow.AddItem(addVehicleMod0("Grille", 6));
	mainWindow.AddItem(addVehicleMod0("Hood", 7));
	mainWindow.AddItem(addVehicleMod0("Fender", 8));
	mainWindow.AddItem(addVehicleMod0("Right Fender", 9));
	mainWindow.AddItem(addVehicleMod0("Roof", 10));
	mainWindow.AddItem(addVehicleMod0("Engine", 11));
	mainWindow.AddItem(addVehicleMod0("Brakes", 12));
	mainWindow.AddItem(addVehicleMod0("Transmission", 13));
	mainWindow.AddItem(addVehicleMod0("Horn", 14));
	mainWindow.AddItem(addVehicleMod0("Suspension", 15));
	mainWindow.AddItem(addVehicleMod0("Armor", 16));
	mainWindow.AddItem(addVehicleMod0("Front Wheels", 23));
	mainWindow.AddItem(addVehicleMod0("Back Wheels(for moto)", 24));
	mainWindow.AddItem(addVehicleMod0("Turbo", 18));
	mainWindow.AddItem(addVehicleMod0("Tire Smoke", 20));
	mainWindow.AddItem(addVehicleMod0("Xenon Headlidhts", 22));
	mainWindow.AddItem(addVehicleMod0("Plate Holder", 25));
	mainWindow.AddItem(addVehicleMod0("Vanity Plates", 26));
	mainWindow.AddItem(addVehicleMod0("Trim", 27));
	mainWindow.AddItem(addVehicleMod0("Ornaments", 28));
	mainWindow.AddItem(addVehicleMod0("Dashboard", 29));
	mainWindow.AddItem(addVehicleMod0("Dial", 30));
	mainWindow.AddItem(addVehicleMod0("Door Speaker", 31));
	mainWindow.AddItem(addVehicleMod0("Seats", 32));
	mainWindow.AddItem(addVehicleMod0("Steeringwheel", 33));
	mainWindow.AddItem(addVehicleMod0("Shifter Leavers", 34));
	mainWindow.AddItem(addVehicleMod0("Planques", 35));
	mainWindow.AddItem(addVehicleMod0("Speakers", 36));
	mainWindow.AddItem(addVehicleMod0("Trunk", 37));
	mainWindow.AddItem(addVehicleMod0("Hydraulics", 38));
	mainWindow.AddItem(addVehicleMod0("Engine Block", 39));
	mainWindow.AddItem(addVehicleMod0("Air Filter", 40));
	mainWindow.AddItem(addVehicleMod0("Struts", 41));
	mainWindow.AddItem(addVehicleMod0("Arch Cover", 42));
	mainWindow.AddItem(addVehicleMod0("Aerials", 43));
	mainWindow.AddItem(addVehicleMod0("Trim", 44));
	mainWindow.AddItem(addVehicleMod0("Gas Tank", 45));
	mainWindow.AddItem(addVehicleMod0("Windows", 46));
	mainWindow.AddItem(addVehicleMod0("UNK47 ???", 47));
	mainWindow.AddItem(addVehicleMod0("Livery", 48));

	mainWindow.RefreshIndex();
});

function addVehicleMod0(car, hash){
	
/*	mainWindow = API.createMenu("Select Car Mod", 0, 0, 25);
	var linkNumber = API.createMenuItem("Car Mods", "");
	resource.trainer.mainWindow.AddItem(linkNumber);
	resource.trainer.mainWindow.BindMenuToItem(mainWindow, linkNumber);
	resource.trainer.menuPool.Add(mainWindow);
*/

	mainWindow.AddItem(addVehicleMod("1", hash, 0));
	mainWindow.AddItem(addVehicleMod("2", hash, 1));
	mainWindow.AddItem(addVehicleMod("3", hash, 2));
	mainWindow.AddItem(addVehicleMod("4", hash, 3));
	mainWindow.AddItem(addVehicleMod("5", hash, 4));
	mainWindow.AddItem(addVehicleMod("6", hash, 5));
	mainWindow.AddItem(addVehicleMod("7", hash, 6));
	mainWindow.AddItem(addVehicleMod("8", hash, 7));
	mainWindow.AddItem(addVehicleMod("9", hash, 8));
	mainWindow.AddItem(addVehicleMod("10", hash, 9));
	mainWindow.AddItem(addVehicleMod("11", hash, 10));
	mainWindow.AddItem(addVehicleMod("12", hash, 11));
	mainWindow.AddItem(addVehicleMod("13", hash, 12));
	mainWindow.AddItem(addVehicleMod("14", hash, 13));
	mainWindow.AddItem(addVehicleMod("15", hash, 14));
	mainWindow.AddItem(addVehicleMod("16", hash, 15));
	mainWindow.AddItem(addVehicleMod("17", hash, 16));
	mainWindow.AddItem(addVehicleMod("18", hash, 17));
	mainWindow.AddItem(addVehicleMod("19", hash, 18));
	mainWindow.AddItem(addVehicleMod("20", hash, 19));
	mainWindow.AddItem(addVehicleMod("21", hash, 20));

	mainWindow.RefreshIndex();
}

function addVehicleMod(car, hash, num) {
	var mod = API.createMenuItem(car, "");

		mod.Activated.connect(function (menu, item, number) {
		API.triggerServerEvent("CREATE_MOD", hash, num);
	});
	return mod;
}

API.onUpdate.connect(function (s, e) {
	
})

/*API.onKeyDown.connect(function(sender, keyEventArgs) {
	if (keyEventArgs.KeyCode == Keys.C)
		num += 1;
});

    API.onKeyDown.connect(function(sender, keyEventArgs) {
	if (keyEventArgs.KeyCode == Keys.Z)
		num -= 1;
}); */